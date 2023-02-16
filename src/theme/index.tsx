import { extendTheme, theme as base } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

// Define tokens
// brand.50 is the primary color `accent`
// brand.400 & brand.500 are for text
export const tokens = {
  colors: {
    brand: {
      50: '#204945',
      100: '#3CBD96',
      200: '#E3F9E7',
      300: '#EBF6ED',
      400: '#2D3748',
      500: '#777E90',
      600: '#BFE3C6',
    },
    gray: {
      '50': '#F1F2F4',
      '100': '#D8DADF',
      '200': '#BEC2CA',
      '300': '#A5AAB6',
      '400': '#8C92A1',
      '500': '#737A8C',
      '600': '#5C6170',
      '700': '#454954',
      '800': '#2E3138',
      '900': '#17181C',
    },
  },
  font: {
    heading: `Montserrat ${base.fonts?.heading}`,
    body: `Inter ${base.fonts?.body}`,
  },
};

// define global style
export const globalStyles = {
  styles: {
    global: {
      body: (props: StyleFunctionProps) => ({
        bg: props.colorMode === 'dark' ? 'gray.600' : 'brand.300',
      }),
    },
  },
};

// override components
export const componentStyle = {
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontSize: 'sm',
        fontWeight: 'semibold',
        color: 'white',
        w: '100%',
        h: '50',
        mb: '24px',
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: {
          bg: 'brand.50',
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'md', // default is md
        variant: 'solid', // default is solid
        colorScheme: 'brand', // default is gray
      },
    },
    Input: {
      baseStyle: {
        borderRadius: '15',
        fontSize: 'sm',
        mb: '24px',
        fontWeight: '300',
        size: 'lg',
      },
      sizes: {},
      variants: {},
      defaultProps: {
        size: 'lg',
        variant: 'solid',
        colorScheme: 'brand',
      },
    },
  },
};

const theme = extendTheme(globalStyles, tokens, componentStyle);

export default theme;
