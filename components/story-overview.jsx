import { Component } from 'react';
import dynamic from 'next/dynamic';
import * as R from 'ramda';
import moment from 'moment';

// Import helpers
import {getStories} from '../helpers/localStorage.js';

// Import components
const StoryBlock = dynamic(() => import('./story-block.jsx'));

class StoryOverview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stories: null
    }
  }
  async componentDidMount() {
    let stories;
    stories = await getStories()
    stories = this.formatStories(stories)
    stories = this.sortStories(stories)// Order a-chronologically
    stories = this.filterStories(stories)
    this.setState({ stories: stories })
  }
  async fetchStories() {
    const response = await fetch('/api/stories')
    return await response.json()
  }
  formatStories(stories) {
    return R.map(function(story) {
      return Object.assign({},
        story.fields,
        { datetime: story.sys.createdAt }
      )
    }, stories)
  }
  filterStories(stories) {
    // Limit amount of stories
    stories = R.slice(0, (this.props.limit || 20), stories)
    // Return future stories
    return stories;
  }
  sortStories(stories) {
    return stories;
  }
  render() {
    if(! this.state.stories) return <div style={{minHeight: '800px'}} />
    return <div className="StoryOverview">
      <nav className="filters" hidden>
        Filters
      </nav>
      <div className="stories">
        {R.map((idx) => {
          const event = this.state.stories[idx];
          return <StoryBlock key={idx} event={event} />
        }, Object.keys(this.state.stories))}
      </div>
      <style jsx>{`
        .StoryOverview {
          width: 1000px;
          max-width: 100%;
          margin: 0 auto 48px;
        }
        .stories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  }
}

export default StoryOverview;
