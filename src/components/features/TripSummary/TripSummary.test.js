import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const expectedTags = ['tag-1', 'tag-2', 'tag-3'];
  test('should render without crashing', () => {
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component).toBeTruthy();
  });

  it('Should generate a valid link address', () => {
    const expectedId = 'abc';
    const generatedLink = `/trip/${expectedId}`;
    const component = shallow(<TripSummary tags={expectedTags} id={expectedId} />);

    expect(component.find('.link').prop('to')).toEqual(generatedLink);
  });

  it('should render correct image attributes', () => {
    const expectedName = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary image={expectedImage} name={expectedName} tags={expectedTags} />);

    const renderedImageSrc = component.find('img').prop('src');
    const renderedImageAlt = component.find('img').prop('alt');

    expect(renderedImageSrc).toEqual(expectedImage);
    expect(renderedImageAlt).toEqual(expectedName);
  });

  it('should render correct props',  () => {
    const expectedName = 'Lorem, ipsum dolor.';
    const costProp = '51,732.87';
    const expectedCost = `from ${costProp}`;
    const daysProp = 7;
    const expectedDays = `${daysProp} days`;
    const component = shallow(<TripSummary days={daysProp} name={expectedName} cost={costProp} tags={expectedTags} />);

    const renderedName = component.find('.title').text();
    const renderedDays = component.find('.details > span:first-child').text();
    const renderedCost = component.find('.details > span + span').text();

    expect(renderedName).toEqual(expectedName);
    expect(renderedDays).toEqual(expectedDays);
    expect(renderedCost).toEqual(expectedCost);
  });

  it('should throw an error if any of the props is empty', () => {
    // expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render the tags in the correct order', () => {
    const component = shallow(<TripSummary tags={expectedTags} />);

    for(let i = 0; i < expectedTags.length; i++) {
      const renderedTag = component.find('.tags > span').at(i).text();
      expect(renderedTag).toEqual(expectedTags[i]);
    }
  });

  it('should not render div with class tags if the property tags is a empty array or is false', () => {
    const tagsProp = [];
    const component = shallow(<TripSummary tags={tagsProp} />);
    expect(component.exists('.tags')).toEqual(false);
    expect(component.exists('.tags')).toEqual(false);
  });
});
