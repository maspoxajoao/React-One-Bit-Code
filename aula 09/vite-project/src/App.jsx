import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="Jhon Doe"
        bio="Full-stavk javascript developer at Acme Inc."
        email="jhon@acme.com"
        phone="+5511987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://www.linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  );
}
