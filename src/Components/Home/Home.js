import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen" >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">Dream Solution</h1>
            {/* <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus molestias optio neque fugit cupiditate necessitatibus ducimus soluta laboriosam aut nobis magnam enim, hic numquam quisquam voluptatem. Autem aut tenetur alias!</p> */}
            <button className="btn btn-ghost"><Link to="/login">Login</Link></button>
            <button className="btn btn-ghost"><Link to="/signup">Sign Up</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Home;