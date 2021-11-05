import { useRouter } from "next/router";
import { WithLayout } from "../../layout";

const MainCoursesPage: React.FC = () => {
  const { asPath } = useRouter();
  return <h1>{asPath}</h1>;
};

export default WithLayout(MainCoursesPage);
