import { Flex, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

const LoadingLogo = ({ onClick }: { onClick: () => any }) => {
  const { colorScheme, colors } = useMantineTheme();
  const bg = colorScheme == "dark" ? colors.dark[7] : "#FFFFFF";
  const logoFill = colorScheme == "dark" ? colors.gray[3] : colors.dark[5];
  return (
    <Flex direction={"column"} bg={bg} sx={{ zIndex: 1000, position: "absolute", left: 0, right: 0, top: 0, bottom: 0, height:"100%" }} align="center" justify="center">
      <motion.div exit={{scale: .1}}>
        <motion.svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="132" height="110" viewBox="0 0 92 110" fill="none">
          <motion.path
            strokeWidth={5}
            strokeDasharray={1000}
            strokeDashoffset={1000}
            opacity={1}
            animate={{ strokeDashoffset: 535, opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M64.5387 83.8323H23.8275C17.0117 83.8323 11.116 79.0854 9.66153 72.4266L3.3345 43.4609C2.15805 38.075 4.13757 32.4878 8.44241 29.044L37.0256 6.17738C42.3431 1.92333 49.9046 1.94287 55.2001 6.22438L82.6601 28.426C87.2528 32.1393 89.1344 38.2671 87.4171 43.9179L78.4122 73.5485C76.5558 79.6568 70.9228 83.8323 64.5387 83.8323Z"
            stroke={logoFill}
            stroke-width="5"
          />
          <motion.path
            opacity={0}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.3 }}
            d="M41.6161 59.066C39.7021 59.066 38.6681 58.758 38.5141 58.142L37.4251 53.885H32.1781L31.2211 57.977C31.0891 58.659 30.0331 59 28.0531 59C26.9971 59 26.2161 58.945 25.7101 58.835C25.2041 58.703 24.9511 58.604 24.9511 58.538L30.7921 36.197C30.7921 36.021 32.2991 35.933 35.3131 35.933C38.3271 35.933 39.8341 36.021 39.8341 36.197L45.5431 58.571C45.5431 58.725 45.0371 58.846 44.0251 58.934C43.0131 59.022 42.2101 59.066 41.6161 59.066ZM33.0031 49.694H36.4681L34.9831 42.863H34.7851L33.0031 49.694ZM54.3301 58.538C54.3301 58.868 53.2961 59.033 51.2281 59.033L49.3801 58.934C48.2801 58.846 47.7301 58.692 47.7301 58.472V36.329C47.7301 35.955 48.8301 35.768 51.0301 35.768C53.2301 35.768 54.3301 35.955 54.3301 36.329V44.777L58.3561 36.329C58.5101 36.021 59.3901 35.867 60.9961 35.867C63.9221 35.867 65.4621 36.12 65.6161 36.626C65.6161 36.67 65.6051 36.714 65.5831 36.758L59.8411 47.12L66.5071 56.327C66.5071 56.371 66.2981 56.558 65.8801 56.888C64.8681 57.768 63.6801 58.461 62.3161 58.967C61.8981 59.121 61.4801 59.198 61.0621 59.198L60.2701 59.132C59.5661 58.956 59.0161 58.505 58.6201 57.779L54.8581 50.585H54.3301V58.538Z"
            fill={logoFill}
          />
          {/* <motion.circle
            strokeWidth={5}
            strokeDasharray={1000}
            strokeDashoffset={1000}
            animate={{ strokeDashoffset: 715 }}
            transition={{ duration: 2, ease: "anticipate", delay: 1.6 }}
            fill="none"
            stroke={logoFill}
            stroke-width="4"
            cx="46"
            cy="50"
            r="44"
          />
          <motion.circle
            opacity={0}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "anticipate", delay: 2.6 }}
            fill={logoFill}
            stroke-width="3"
            cx="4"
            cy="54"
            r="6"
          >
            <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 46 48" to="360 46 52" repeatCount="indefinite" />
          </motion.circle> */}
        </motion.svg>
      </motion.div>
    </Flex>
  );
};

export default LoadingLogo;
