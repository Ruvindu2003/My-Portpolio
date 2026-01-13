// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};

import { Terminal } from 'lucide-react';

// Button to show welcome popup again (for testing/debugging)
const ShowWelcomeButton = () => {
  const handleShowWelcome = () => {
    playButtonSound();
    // Remove the flag so onboarding shows again
    localStorage.removeItem('hasSeenOnboarding');
    // Reload page to show onboarding flow
    window.location.reload();
  };

  return (
    <button
      onClick={handleShowWelcome}
      className="fixed bottom-4 right-4 bg-terminal-bg-panel text-terminal-green px-4 py-2 rounded-terminal font-bold border-2 border-terminal-green hover:terminal-glow hover:bg-terminal-green hover:text-terminal-bg-main transition-all duration-300 terminal-button-press z-50 flex items-center gap-2"
      title="Show Welcome Popup Again"
    >
      <Terminal size={18} />
      <span className="hidden sm:inline">Show Welcome</span>
    </button>
  );
};

export default ShowWelcomeButton;

