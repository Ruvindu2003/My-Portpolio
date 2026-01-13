import { useState } from 'react';
import BootScreen from './BootScreen';
import InteractiveTerminal from './InteractiveTerminal';

type OnboardingStep = 'boot' | 'terminal' | 'complete';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const OnboardingFlow = ({ onComplete }: OnboardingFlowProps) => {
  // Always start with boot screen - terminal will show every time
  const [step, setStep] = useState<OnboardingStep>('boot');

  const handleBootComplete = () => {
    setStep('terminal');
  };

  const handleTerminalComplete = () => {
    // Terminal completes and shows main content
    // Will show again on next page load/refresh
    setStep('complete');
    onComplete();
  };

  // Show terminal flow every time
  if (step === 'complete') {
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

