import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://media.licdn.com/dms/image/C4E03AQHyDxpqrIPleA/profile-displayphoto-shrink_800_800/0/1653496640574?e=1691625600&v=beta&t=9M3L7CdkMNLm0gQeZ8MBJsIFU4PnDWyCeAKQT5enzq4"
        name="João Victor"
        bio="Dev Junior."
        email="j0407victor@gmail.com"
        phone="31 992865879"
        githubUrl="https://github.com/maspoxajoao"
        linkedinUrl="https://www.linkedin.com/in/joao-victor-4a40a923b/"
        twitterUrl="https://twitter.com"
      />
    </div>
  );
}
