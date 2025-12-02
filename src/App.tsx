import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './steps/Article';
import Question1 from './steps/Question1';
import Question2 from './steps/Question2';
import Question3 from './steps/Question3';
import Question4 from './steps/Question4';
import Question5 from './steps/Question5';
import Question6 from './steps/Question6';
import Question7 from './steps/Question7';
import Question8 from './steps/Question8';
import Question9 from './steps/Question9';
import Question10 from './steps/Question10';
import Question11 from './steps/Question11';
import Question12 from './steps/Question12';
import Question13 from './steps/Question13';
import Question14 from './steps/Question14';
import Loading from './steps/Loading';
import Diagnosis from './steps/Diagnosis';
import Transformation from './steps/Transformation';
import Comparison from './steps/Comparison';
import FinalCTA from './steps/FinalCTA';
import { QuizData } from './types';
import { getAllParams } from './utils/urlParams';

type Step =
  | 'article'
  | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'q8' | 'q9' | 'q10'
  | 'q11' | 'q12' | 'q13' | 'q14'
  | 'loading' | 'diagnosis' | 'transformation' | 'comparison' | 'cta';

function App() {
  const [step, setStep] = useState<Step>('article');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [quizData, setQuizData] = useState<QuizData>({});
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const params = getAllParams();
    const urlParams = new URLSearchParams(params);
    const currentUrl = window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
    if (window.location.href !== window.location.origin + currentUrl) {
      window.history.replaceState(null, '', currentUrl);
    }
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [step]);

  const updateQuizData = (data: Partial<QuizData>) => {
    setQuizData(prev => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (step) {
      case 'article':
        return <Article onContinue={() => setStep('q1')} />;

      case 'q1':
        return <Question1 onSelect={(value) => {
          updateQuizData({ kgToLose: value });
          setStep('q2');
        }} />;

      case 'q2':
        return <Question2 onSelect={(value) => {
          updateQuizData({ bodyType: value });
          setStep('q3');
        }} />;

      case 'q3':
        return <Question3 onSelect={(value) => {
          updateQuizData({ targetZone: value });
          setStep('q4');
        }} />;

      case 'q4':
        return <Question4 onSubmit={(value) => {
          updateQuizData({ name: value });
          setStep('q5');
        }} />;

      case 'q5':
        return <Question5
          name={quizData.name || ''}
          onSelect={(value) => {
            updateQuizData({ weightImpact: value });
            setStep('q6');
          }}
        />;

      case 'q6':
        return <Question6 onSelect={(value) => {
          updateQuizData({ happyWithAppearance: value });
          setStep('q7');
        }} />;

      case 'q7':
        return <Question7 onSelect={(value) => {
          updateQuizData({ obstacle: value });
          setStep('q8');
        }} />;

      case 'q8':
        return <Question8 onSubmit={(values) => {
          updateQuizData({ benefits: values });
          setStep('q9');
        }} />;

      case 'q9':
        return <Question9 onContinue={() => setStep('q10')} />;

      case 'q10':
        return <Question10 onContinue={() => setStep('q11')} />;

      case 'q11':
        return <Question11 onSubmit={(value) => {
          updateQuizData({ currentWeight: value });
          setStep('q12');
        }} />;

      case 'q12':
        return <Question12 onSubmit={(value) => {
          updateQuizData({ height: value });
          setStep('q13');
        }} />;

      case 'q13':
        return <Question13
          currentWeight={quizData.currentWeight || 70}
          onSubmit={(value) => {
            updateQuizData({ goalWeight: value });
            setStep('q14');
          }}
        />;

      case 'q14':
        return <Question14 onSelect={(value) => {
          updateQuizData({ waterIntake: value });
          setStep('loading');
        }} />;

      case 'loading':
        return <Loading onComplete={() => setStep('diagnosis')} />;

      case 'diagnosis':
        return <Diagnosis
          currentWeight={quizData.currentWeight || 70}
          height={quizData.height || 165}
          goalWeight={quizData.goalWeight || 60}
          onContinue={() => setStep('transformation')}
        />;

      case 'transformation':
        return <Transformation onContinue={() => setStep('comparison')} />;

      case 'comparison':
        return <Comparison onContinue={() => setStep('cta')} />;

      case 'cta':
        return <FinalCTA name={quizData.name || 'você'} />;

      default:
        return <Article onContinue={() => setStep('q1')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      <div className="flex-grow">
        <div className={`transition-all duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {renderStep()}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
