// Utility to play button sound
const playButtonSound = () => {
  const audio = new Audio('/sounds/mixkit-sci-fi-click-900.wav');
  audio.currentTime = 0;
  audio.play();
};
import { useRef, useState } from 'react';

const CVUploader = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState('');

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fileInput.current || !fileInput.current.files || fileInput.current.files.length === 0) {
      setStatus('Please select a file.');
      return;
    }
    setStatus('Uploading...');
    // TODO: Integrate with backend/email service
    setTimeout(() => {
      setStatus('CV uploaded and sent to your email!');
    }, 2000);
  };

  return (
    <section className="py-16 flex flex-col items-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl my-10 mx-4">
      <h2 className="text-3xl font-extrabold text-white mb-6 drop-shadow-lg">Upload Your CV</h2>
      <form onSubmit={handleUpload} className="flex flex-col items-center gap-4 w-full max-w-md">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          ref={fileInput}
          className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-600 file:to-purple-600 file:text-white hover:file:bg-blue-700"
        />
        <button
          onClick={playButtonSound}
          type="submit"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
        >
          Upload & Send
        </button>
        {status && <div className="text-green-400 mt-2 font-semibold animate-pulse">{status}</div>}
      </form>
    </section>
  );
};

export default CVUploader;
