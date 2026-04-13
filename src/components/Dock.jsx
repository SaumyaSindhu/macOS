import React from 'react';
import './dock.scss';

const Dock = () => {
  return (
    <div className="dock-wrapper">
      <div className="dock">
        <div className="icon github" data-label="Github">
          <img src="/doc-icons/github.svg" alt="" />
        </div>
        <div className="icon note" data-label="Note">
          <img src="/doc-icons/note.svg" alt="" />
        </div>
        <div className="icon pdf" data-label="PDF">
          <img src="/doc-icons/pdf.svg" alt="" />
        </div>
        <div className="icon calendar" data-label="Calendar">
          <img src="/doc-icons/calendar.svg" alt="" />
        </div>
        <div className="icon spotify" data-label="Spotify">
          <img src="/doc-icons/spotify.svg" alt="" />
        </div>
        <div className="icon mail" data-label="Mail">
          <img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div className="icon link" data-label="Link">
          <img src="/doc-icons/link.svg" alt="" />
        </div>
        <div className="icon cli" data-label="CLI">
          <img src="/doc-icons/cli.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Dock