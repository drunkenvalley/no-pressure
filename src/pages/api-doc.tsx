import "swagger-ui-react/swagger-ui.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { createSwaggerSpec } from "next-swagger-doc";
import dynamic from "next/dynamic";

const SwaggerUI = dynamic(import("swagger-ui-react"), { ssr: false });

const ApiDoc = ({ spec }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="bg-light">
      <SwaggerUI spec={spec} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "./src/pages/api",
    definition: {
      info: {
        title: "No Pressure API",
        version: "1.0",
      },
      openapi: "3.0.0",
    },
  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
