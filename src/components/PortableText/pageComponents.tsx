import { PortableText, PortableTextReactComponents } from "next-sanity";
import { ComponentProps } from "react";
import About from "@/components/About";
import Alert from "@/components/Alert";
import Feature from "@/components/Feature";
import FeatureList from "@/components/FeatureList";
import Recruitment from "@/components/Recruitment";
import Section from "@/components/Section";
import textComponents from "./textComponents";

const pageComponents: Partial<PortableTextReactComponents> | undefined = {
  types: {
    about: ({ value }) => (
      <About id={value.id.current}>
        <PortableText components={textComponents} value={value.content} />
      </About>
    ),
    alert: ({ value }) => (
      <Alert icon={value.icon} id={value.id.current}>
        <PortableText components={textComponents} value={value.content} />
      </Alert>
    ),
    feature_list: ({ value }) => (
      <FeatureList>
        {value.features.map(
          ({
            _id,
            ...feature
          }: ComponentProps<typeof Feature> & { _id: string }) => (
            <Feature key={_id} {...feature} />
          ),
        )}
      </FeatureList>
    ),
    recruitment: ({ value }) => (
      <Recruitment
        id={value.id.current}
        link={
          <PortableText components={textComponents} value={value.linkText} />
        }
      >
        <PortableText components={textComponents} value={value.content} />
      </Recruitment>
    ),
    section: (args) => {
      return <Section {...args.value} />;
    },
  },
};

export default pageComponents;
