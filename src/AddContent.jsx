import { useState } from 'react';


function AddContent() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowUploadDialog(true);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
    setShowUploadDialog(false);
    setFileInputKey(fileInputKey + 1); // Resetting the file input
  };

  return (
    <div className="p-4">
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="bg-white text-sky-800 px-4 py-2 rounded-2xl shadow-md mr-4"
          onClick={() => setShowUploadDialog(true)}
        >
          Add Content
        </button>
        {showUploadDialog && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-sky-800 hover:bg-gray-100"
                onClick={() => handleOptionSelect('Content')}
              >
                Content
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-sky-800 hover:bg-gray-100"
                onClick={() => handleOptionSelect('Folder')}
              >
                Folder
              </button>
            </div>
          </div>
        )}
      </div>
      <input
        key={fileInputKey}
        type="file"
        accept=".jpg, .jpeg, .png, .pdf" // Add accepted file types here
        multiple
        style={{ display: 'none' }}
        onChange={handleFileUpload}
        ref={(fileInput) => (fileInput && fileInput.click()) || undefined}
      />
      <div className="flex items-center text-sm text-gray-600">
        {uploadedFiles.map((file, index) => (
          <span key={index} className="mr-2">
            {file.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AddContent;
