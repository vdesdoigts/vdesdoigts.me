import { Box, Code, Flex } from "@chakra-ui/layout";
import Highlight, { defaultProps, Language, Prism } from "prism-react-renderer";
import codeTheme from "prism-react-renderer/themes/nightOwlLight";

type ChildrenProp = {
  children: string;
  className?: string;
};

const CodeBlock = ({ children, className }: ChildrenProp) => {
  const language: Language = className
    ? (className.replace("language-", "") as Language)
    : "javascript";

  return (
    <Flex marginY={4} width="100%" justifyContent="center">
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={codeTheme}
        Prism={Prism}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          return (
            <Code
              className={className}
              width="100%"
              padding="md"
              paddingLeft="0"
              borderRadius="xl"
              overflow="auto"
              fontFamily="SFMono-Regular,Menlo,Monaco,Consolas,monospace"
              style={{ ...style }}
            >
              {tokens.map(
                (line, i) =>
                  tokens.length - 1 > i && (
                    <Box
                      _before={{
                        position: "absolute",
                        content: `"${i + 1}"`,
                        opacity: 0.3,
                        left: "-3rem",
                      }}
                      marginLeft="4rem"
                      position="relative"
                      key={i}
                      {...getLineProps({ line, key: i })}
                    >
                      {line.map((token, key) => (
                        <Box
                          as="span"
                          key={key}
                          _selection={{
                            backgroundColor: "yellow.200",
                          }}
                          {...getTokenProps({ token, key })}
                        />
                      ))}
                    </Box>
                  )
              )}
            </Code>
          );
        }}
      </Highlight>
    </Flex>
  );
};

export default CodeBlock;
