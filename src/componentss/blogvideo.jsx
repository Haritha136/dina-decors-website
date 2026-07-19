import eventVideo from"../assetso/vid5.mp4";
function BlogVideo(){
  return (
    <section className="video-section">
      <h2>Our Latest Blog</h2>

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

export default BlogVideo