import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { HeroBannerImplementation } from './hero-banner-implementation';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

export const ImageTestData: {
  mtns: Queries.HomePageQuery['mtns'];
  bkg: Queries.HomePageQuery['bkg'];
} = {
  mtns: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fullWidth',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCElEQVQ4y62Nu09bBxTGP7/ie6PSEPD1u35cv64NxGBiwFyM3w62AxeMY2ywlYBjoIY8SlEQA22RSpshKajKliFLukTq0FZVu0SZOvVvqBSpW9J27BBjnwijRB3bKp/0k76jc/Q7wH9IYfMBKh8dYvH2IapbXyHfuIfC5n3MNe7hf+WdCPd3vsfXX/6Ewy9+xP6n30JcP8DS1kNcXr2PaOUzTJT3kKnd/XeyUGLlLeOJGnJz2/jm0XPsHjzG7OrHKN44Qrq4gfLGJyg19iBd25YBCg1g8ME7KcEaykKIzMMxIUGIFuCeyMOfrMj74mVFf2JR5k9XIE6vgg/mZCtbR9i9+wQT0hqylS2ky7fkhfodIJAq4mJ6Aa6wJHdF5mUDqSWZN15SBHM1eXJpW9YfK8MXK3Xk4tyHys93nkAIX0Fwuq7wpaqyG7tHEKW6IlXaRHFt1whPWJJ39cVhG8vCOJJBX3IJA1NXkajsQFo/gG+yGOyLln7whq+I49IaAoMzcl9kQTuUWYYjVoJ/clY5WdjA6KWqITJ7/Tlso5fwfiADeyi7rAsk3UK0aBLipX3/1NVnw7naL8PZlb8DmWs0lFn+LVa82YjkG08tg4nfvfFywxFdMHuGogjlG85s9c6v+doeocc3Zu6PFb4LTFVpZKb+Mpir/eFPLpJn7DJ5xRkSxqeJDyRfhaRVCs9vkCBKZPSJJBZuUnBm/c/+WOln11jur9HsMg2nK02E8+svwrN1upgqH9sGY3TeOkBnOb6p7DYdK3ttx6oeS1txzkTnrRda1uFU0zoYP3YG0y2DN9Tk3CPUZfaRmuNJrXOd3BN0nlF6z+xtKnssbfk5Q0vZbWwxWjsxOkebNbrbjN510kmlsRCj5anLLLRVGmtb2WshFWdvndHyTbWOb6n1TmKMnjbk3aaWirORuiNwtVmTQB2MHmJNHmKNbmINTmINbmJ0PJ3hbNR5eMJJ56zEaN5gIXQWegcxeiexOv4f2InVO067wXXatfbOzGhPRSx3KmE5C7GaD4jtNdFrMwYIvcZTDJ4AAAAASUVORK5CYII=',
        },
        images: {
          fallback: {
            src: '/static/d407778d51249ba59807b0edebea6801/c8228/mountains.png',
            srcSet:
              '/static/d407778d51249ba59807b0edebea6801/ea847/mountains.png 750w,\n/static/d407778d51249ba59807b0edebea6801/7e80a/mountains.png 1080w,\n/static/d407778d51249ba59807b0edebea6801/e2aad/mountains.png 1366w,\n/static/d407778d51249ba59807b0edebea6801/c8228/mountains.png 1920w',
            sizes: '100vw',
          },
          sources: [
            {
              srcSet:
                '/static/d407778d51249ba59807b0edebea6801/57584/mountains.webp 750w,\n/static/d407778d51249ba59807b0edebea6801/72f43/mountains.webp 1080w,\n/static/d407778d51249ba59807b0edebea6801/4a276/mountains.webp 1366w,\n/static/d407778d51249ba59807b0edebea6801/2136b/mountains.webp 1920w',
              type: 'image/webp',
              sizes: '100vw',
            },
          ],
        },
        width: 1,
        height: 0.6671874999999999,
      },
    },
  },
  bkg: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fullWidth',
        placeholder: {
          fallback:
            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEBQL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgT/2gAMAwEAAhADEAAAAc9dqdJEUEy7jPJaSUD/xAAbEAACAwADAAAAAAAAAAAAAAAAAQIQEgMTIP/aAAgBAQABBQLA4maarsRLkTNeP//EABcRAQEBAQAAAAAAAAAAAAAAAAABERL/2gAIAQMBAT8BascP/8QAFhEBAQEAAAAAAAAAAAAAAAAAABIT/9oACAECAQE/AZS0aP/EABUQAQEAAAAAAAAAAAAAAAAAACAx/9oACAEBAAY/AlV//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERIRBB/9oACAEBAAE/IZFj0TwkNDFoUaFLz//aAAwDAQACAAMAAAAQOBS+/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/ELcZUrD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/EGhOKP/EABsQAQEBAAIDAAAAAAAAAAAAAAEAESExQVGR/9oACAEBAAE/EADc7vQs4ldeZ1zBsh0H2ZUde7X3bt23/9k=',
        },
        images: {
          fallback: {
            src: '/static/2c4c2552b624b8174be33e993bc02968/bd0c7/background-purp.jpg',
            srcSet:
              '/static/2c4c2552b624b8174be33e993bc02968/51b3b/background-purp.jpg 750w,\n/static/2c4c2552b624b8174be33e993bc02968/4693e/background-purp.jpg 1080w,\n/static/2c4c2552b624b8174be33e993bc02968/b5f28/background-purp.jpg 1366w,\n/static/2c4c2552b624b8174be33e993bc02968/bd0c7/background-purp.jpg 1920w',
            sizes: '100vw',
          },
          sources: [
            {
              srcSet:
                '/static/2c4c2552b624b8174be33e993bc02968/6e47b/background-purp.webp 750w,\n/static/2c4c2552b624b8174be33e993bc02968/6e082/background-purp.webp 1080w,\n/static/2c4c2552b624b8174be33e993bc02968/19fb5/background-purp.webp 1366w,\n/static/2c4c2552b624b8174be33e993bc02968/a1630/background-purp.webp 1920w',
              type: 'image/webp',
              sizes: '100vw',
            },
          ],
        },
        width: 1,
        height: 1.4979166666666666,
      },
    },
  },
};

// useStaticQuery.mockImplementation(() => (ImageTestData));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('HeroBannerImplementation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ParallaxProvider>
        <HeroBannerImplementation
          mtns={ImageTestData.mtns}
          bkg={ImageTestData.bkg}
        />
      </ParallaxProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
