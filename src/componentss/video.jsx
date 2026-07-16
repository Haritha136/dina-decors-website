import eventVideo from"../assetso/vid4.mp4";
function Video(){
  return (
    <section className="video-section">
      <h2>Our Events in Action</h2>

      <video
        className="event-video"
        controls
        autoPlay
        muted
        loop
      >
        <source src={eventVideo}type="video/mp4" />
      </video>
    </section>
  );
}

export default Video;