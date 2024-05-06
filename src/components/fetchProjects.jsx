import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "ytbp6lyzlupm",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "portfolio" });
      console.log(response.items);
      const projects = response.items.map((item) => {
        const { title, url, img, text, githubUrl } = item.fields;
        const id = item.sys.id;
        const image = img?.fields?.file?.url;
        return { title, url, id, image, text, githubUrl };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
