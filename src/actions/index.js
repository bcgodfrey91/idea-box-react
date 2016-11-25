export const upvote = (quality) => {
  return {type: 'UPVOTE', quality}
},

export const downvote = (quality) => {
  return { type: 'DOWNVOTE', quality }
},

export const updateTitle = (title) => {
  return { type: 'UPDATE_TITLE', title }
},

export const updateBody = (body) => {
  return { type: 'UPDATE_BODY', body }
},

export const addIdea = (input) => {
  return { type: 'ADD_IDEA', input }
},

export const removeIdea = (ideas) => {
  return { type: 'REMOVE_IDEA', ideas }
}
