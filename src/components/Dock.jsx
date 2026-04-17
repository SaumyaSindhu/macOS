import React from 'react';
import './dock.scss';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <div className="dock-wrapper">
      <div className="dock">
        <div
          onClick={() =>
            setWindowsState((state) => ({ ...state, github: true }))
          }
          className="icon github"
          data-label="Github"
        >
          <img src="/doc-icons/github.svg" alt="" />
        </div>
        <div
          onClick={() => setWindowsState((state) => ({ ...state, note: true }))}
          className="icon note"
          data-label="Note"
        >
          <img src="/doc-icons/note.svg" alt="" />
        </div>
        <div
          onClick={() =>
            setWindowsState((state) => ({ ...state, resume: true }))
          }
          className="icon pdf"
          data-label="PDF"
        >
          <img src="/doc-icons/pdf.svg" alt="" />
        </div>
        <div
          onClick={() => {
            window.open('https://calendar.google.com/', '_blank');
          }}
          className="icon calendar"
          data-label="Calendar"
        >
          <img src="/doc-icons/calendar.svg" alt="" />
        </div>
        <div
          onClick={() =>
            setWindowsState((state) => ({ ...state, spotify: true }))
          }
          className="icon spotify"
          data-label="Spotify"
        >
          <img src="/doc-icons/spotify.svg" alt="" />
        </div>
        <div
          onClick={() => {
            window.location.href = 'mailto:saumya@example.com';
          }}
          className="icon mail"
          data-label="Mail"
        >
          <img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div
          onClick={() =>
            {window.open(
              "https://www.linkedin.com/in/saumya-sindhu-7078a4332/",
              "_blank",
            )}
          }
          className="icon link"
          data-label="Link"
        >
          <img src="/doc-icons/link.svg" alt="" />
        </div>
        <div
          onClick={() => setWindowsState((state) => ({ ...state, cli: true }))}
          className="icon cli"
          data-label="CLI"
        >
          <img src="/doc-icons/cli.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Dock
