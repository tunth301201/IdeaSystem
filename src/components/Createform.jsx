import {React, useState} from "react";
import axios from "axios";
import Footer from "./Footer";

export default function Createform() {
  
    const [file, setFile] = useState(null);
    const [privacy, setPrivacy] = useState('public');
    const [tags, setTags] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
      formData.append('privacy', privacy);
      formData.append('tags', tags);
      formData.append('title', title);
      formData.append('content', content);
      axios.post('/upload', formData).then((res) => {
        console.log(res.data);
      });
    };
  return (
    <div>
      <div id="main-content" className="relative w-full h-full overflow-auto bg-gray-50 lg:ml-64 pr-64 dark:bg-gray-900">
        <h2 className="text-white text-lg text-left pl-4 pt-2">Create Idea</h2>
        <div className="px-4 pt-0">
          <div className="grid w-full grid-cols-1 my-4 ">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
              <form onSubmit={handleSubmit} className="shadow-md rounded px-5 pt-0 pb-0 mb-4 text-left">
                <div className="mb-4">
                  <label className="block text-gray-400 font-bold mb-2">Privacy</label>
                  <select value={privacy} onChange={(e) => setPrivacy(e.target.value)} className="block appearance-none w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 font-bold mb-2">Tags</label>
                  <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} className="appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 font-bold mb-2">Title</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="appearance-none border rounded w-full h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-400 font-bold mb-2">Content</label>
                  <textarea value={content} onChange={(e) => setContent(e.target.value)} className="appearance-none border rounded w-full h-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 font-bold mb-2">File</label>
                  <input className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="flex items-center justify-center">
                  <button className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="pr-7">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
