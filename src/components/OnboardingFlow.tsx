import { useState, useEffect } from 'react';
import BootScreen from './BootScreen';
import InteractiveTerminal from './InteractiveTerminal';

type OnboardingStep = 'boot' | 'terminal' | 'complete';

const OnboardingFlow = () => {
  const [step, setStep] = useState<OnboardingStep>('boot');
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  // Check if user has seen onboarding before
  useEffect(() => {
    const seen = localStorage.getItem('hasSeenOnboarding');
    if (seen === 'true') {
      setHasSeenOnboarding(true);
      setStep('complete');
    }
  }, []);

  const handleBootComplete = () => {
    setStep('terminal');
  };

  const handleTerminalComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setStep('complete');
  };

  // Skip onboarding if already seen
  if (hasSeenOnboarding || step === 'complete') {
    return null;
  }

  return (
    <>
      {step === 'boot' && <BootScreen onComplete={handleBootComplete} />}
      {step === 'terminal' && <InteractiveTerminal onComplete={handleTerminalComplete} />}
    </>
  );
};

export default OnboardingFlow;

