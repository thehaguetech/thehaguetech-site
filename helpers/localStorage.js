const today = new Date();
const currentDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

const clearCache = function() {
  localStorage.removeItem('THT_events')
}

const getEvents = async function() {
  const eventsFromLocalStorage = JSON.parse(localStorage.getItem('THT_events')) || { lastUpdate: '' };
  // Return from API
  if(true || eventsFromLocalStorage.lastUpDate != currentDate) {
    const apiResponse = await fetch('/api/events')
    const events = await apiResponse.json()
    // Save in localStorage
    localStorage.setItem('THT_events', JSON.stringify({
      lastUpDate: currentDate,
      events: events
    }))
    return events;
  }
  // Or directly from localStorage
  return eventsFromLocalStorage.events;
}

const getStories = async function() {
  const storiesFromLocalStorage = JSON.parse(localStorage.getItem('THT_stories')) || { lastUpdate: '' };
  // Return from API
  if(true || storiesFromLocalStorage.lastUpDate != currentDate) {
    const apiResponse = await fetch('/api/stories')
    const stories = await apiResponse.json()
    // Save in localStorage
    localStorage.setItem('THT_stories', JSON.stringify({
      lastUpDate: currentDate,
      stories: stories
    }))
    return stories;
  }
  // Or directly from localStorage
  return storiesFromLocalStorage.stories;
}

export { getEvents, getStories }
