<script lang="ts">
  import { onMount } from "svelte";
  import { chatTrigger } from "$lib/stores/chat";

  // Hero Components
  import HeroContent from "./hero/HeroContent.svelte";

  // Phone Components
  import IPhone15Pro from "./phone/IPhone15Pro.svelte";
  import PhoneStatusBar from "./phone/PhoneStatusBar.svelte";
  import PhoneHeader from "./phone/PhoneHeader.svelte";
  import AppProfileView from "./phone/AppProfileView.svelte";
  import AppChatView from "./phone/AppChatView.svelte";
  import AppChatInput from "./phone/AppChatInput.svelte";
  import ChatDrawer from "./phone/ChatDrawer.svelte";

  // View state
  let currentView: "profile" | "chat" = "profile";
  let isGlowing = false;
  let isDrawerOpen = false;

  // Time state
  let currentTime = "";

  onMount(() => {
    const updateTime = () => {
      const now = new Date();
      currentTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  });

  // Chat state
  let chatInput: HTMLTextAreaElement;
  let message = "";
  $: if ($chatTrigger > 0) {
    focusChat();
    chatTrigger.set(0);
  }

  let messages = [
    {
      id: 1,
      text: "Hi! Feel free to reach out for dev work, collaboration, or just to say hello. I'm always happy to talk code!",
      sender: "me",
      time: "Just now",
    },
  ];

  function focusChat() {
    if (typeof window !== "undefined" && window.innerWidth < 960) {
      isDrawerOpen = true;
      return;
    }

    currentView = "chat";
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      if (chatInput) {
        chatInput.focus();
        isGlowing = true;
        setTimeout(() => (isGlowing = false), 1500);

        const chatContainer = document.querySelector(".app-scroll-container");
        if (chatContainer) {
          chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: "smooth",
          });
        }
      }
    }, 500);
  }

  function sendMessage() {
    if (!message.trim()) return;

    messages = [
      ...messages,
      {
        id: Date.now(),
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ];

    message = "";

    setTimeout(() => {
      messages = [
        ...messages,
        {
          id: Date.now(),
          text: "Got it! I've received your message. I'll get back to you ASAP. Let's build something great.",
          sender: "me",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ];
    }, 1000);
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
</script>

<section class="hero">
  <div class="container">
    <HeroContent
      {focusChat}
      containerVariants={container}
      itemVariants={item}
    />

    <div class="visual">
      <IPhone15Pro {currentTime}>
        <PhoneStatusBar slot="status-bar" {currentTime} />

        <PhoneHeader
          slot="header"
          {currentView}
          onBack={() => (currentView = "profile")}
        />

        <div class="app-scroll-container {currentView}">
          {#if currentView === "profile"}
            <AppProfileView onMessageClick={focusChat} />
          {:else}
            <AppChatView {messages} />
          {/if}
        </div>

        {#if currentView === "chat"}
          <AppChatInput
            slot="input"
            bind:message
            bind:chatInput
            {isGlowing}
            onSend={sendMessage}
          />
        {/if}
      </IPhone15Pro>

      <ChatDrawer
        bind:open={isDrawerOpen}
        bind:message
        {messages}
        onSend={sendMessage}
      />

      <!-- Ambient Glows -->
      <div class="sphere sphere-1"></div>
      <div class="sphere sphere-2"></div>
    </div>
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  .visual {
    position: relative;
    display: flex;
    justify-content: center;
    perspective: 2000px;
    height: 700px;
    align-items: center;
  }

  .app-scroll-container {
    flex: 1;
    overflow-y: auto;
    padding: 10px 16px 100px;
    scrollbar-width: none;
  }
  .app-scroll-container::-webkit-scrollbar {
    display: none;
  }
  .app-scroll-container.profile {
    padding: 0;
  }

  /* Background Ambient Spheres */
  .sphere {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    z-index: -1;
    opacity: 0.35;
  }
  .sphere-1 {
    width: 400px;
    height: 400px;
    background: var(--accent-1);
    top: 10%;
    right: -100px;
  }
  .sphere-2 {
    width: 300px;
    height: 300px;
    background: var(--accent-2);
    bottom: 10%;
    left: 40%;
  }

  @media (max-width: 960px) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 3rem;
    }

    .visual {
      display: none;
    }
  }

  @media (min-width: 960px) {
    .visual {
      display: flex;
    }
  }
</style>
