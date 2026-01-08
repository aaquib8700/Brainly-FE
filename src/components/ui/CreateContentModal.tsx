import { useRef, useState } from "react";
import CrossIcon from "../../icons/CrossIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateContentModal = ({ open, onClose }:CreateContentModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      BACKEND_URL + "/api/v1/content",
      { title, link, type },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    onClose();
  }

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-black/80 to-black/60 border border-white/10 p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Add Content
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Save a new piece of content to your brain
              </p>
            </div>

                  <div  onClick={onClose} className="w-fit hover:bg-red-600 hover:text-white rounded-sm text-white font-extrabold">
                    <CrossIcon />
                  </div>
          </div>
          <div className="mt-6 space-y-5">
            <div>
              <label className="text-sm text-gray-400">Title</label>
              <Input
                ref={titleRef}
                placeholder="Give it a memorable title"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Link</label>
              <Input
                ref={linkRef}
                placeholder="Paste the URL here"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Content Type</label>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  onClick={() => setType(ContentType.Youtube)}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 transition
                    ${
                      type === ContentType.Youtube
                        ? "bg-red-500/10 border-red-500 text-red-500"
                        : "border-white/10 text-gray-400 hover:border-white/20"
                    }
                  `}
                >
                  <YoutubeIcon size="sm" />
                  YouTube
                </button>
                <button
                  onClick={() => setType(ContentType.Twitter)}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 transition
                    ${
                      type === ContentType.Twitter
                        ? "bg-blue-500/10 border-blue-500 text-blue-500"
                        : "border-white/10 text-gray-400 hover:border-white/20"
                    }
                  `}
                >
                  <TwitterIcon size="sm" />
                  Twitter
                </button>
              </div>
            </div>

            {/* SUBMIT */}
            <Button
              onClick={addContent}
              variant="primary"
              size="md"
              text="Add to Brain"
              fullWidth
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateContentModal;
