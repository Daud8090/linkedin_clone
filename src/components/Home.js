import "./Header.css";
import Post from "./Post";

const Home = () => {
// data from api 
const posts = [
    {
      id: 1,
      name: 'Yash',
      profile_pic: 'https://www.shutterstock.com/shutterstock/photos/379763746/display_1500/stock-photo-brutal-bearded-man-with-a-mustache-in-a-shirt-pants-with-suspenders-stands-leaning-on-the-hood-of-379763746.jpg',
      timestamp: '1h ago',
      content: 'Excited to start my journey on LinkedIn Clone!',
      image: 'https://www.shutterstock.com/shutterstock/photos/1874377720/display_1500/stock-photo-a-young-woman-stands-in-front-of-a-building-undergoing-construction-1874377720.jpg',
    },
    {
      id: 2,
      name: 'Nihal',
      profile_pic: 'https://www.shutterstock.com/shutterstock/photos/49621654/display_1500/stock-photo-smiling-mature-golfer-on-golf-course-49621654.jpg',
      timestamp: '3h ago',
      content: 'React.js is amazing! Learning so much while building this project.',
      image:'https://www.shutterstock.com/shutterstock/photos/1937886058/display_1500/stock-photo-bank-blocks-are-linked-to-money-by-lines-operation-of-money-funds-transactions-lending-deposits-1937886058.jpg'
    },
    {
        id: 3,
        name: 'Daud',
        profile_pic: 'https://www.shutterstock.com/shutterstock/photos/2544462521/display_1500/stock-photo-side-view-of-ethnic-short-haired-handsome-man-in-sport-clothes-with-smartphone-and-earphones-2544462521.jpg',
        timestamp: '3h ago',
        content: 'React.js is amazing! Learning so much while building this project.',
        image:'https://www.shutterstock.com/shutterstock/photos/249041452/display_1500/stock-vector-smartphone-with-speech-bubble-social-media-icons-chat-speech-bubble-and-share-link-symbols-short-249041452.jpg'
      },
  ];
  return (
    <div style={{ padding: '20px' }}>
      {posts.map(post => (
        <Post
          key={post.id}
          name={post.name}
          profile_pic={post.profile_pic}
          timestamp={post.timestamp}
          content={post.content}
          image={post.image}
        />
      ))}
    </div>
  )
};

export default Home;
