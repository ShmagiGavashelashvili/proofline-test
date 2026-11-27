import { useEffect, useState } from "react";

export function Hello({ userId }: { userId: string }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((r) => r.json())
      .then(setUser);
  }, []);

  return <h1 onClick={() => alert("hi")}>Hello, {user.name}</h1>;
}
