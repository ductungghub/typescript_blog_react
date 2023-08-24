import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/')
  }, 3000);

  return (
    <div
      className="position-relative"
      style={{ minHeight: "calc(100vh - 70px)" }}
    >
     <div className="position-absolute text-secondary"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <h2>
          404 page not found
      </h2 >
      <p>We are sorry but the page you are looking for does not exist.</p>
     </div>
    </div>
  );
};

export default NotFound;