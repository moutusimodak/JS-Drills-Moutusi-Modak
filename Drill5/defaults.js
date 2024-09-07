
function defaults(obj, defaultProps) {
    for (const key in defaultProps) {
        if (!obj.hasOwnProperty(key)) { 
              obj[key] = defaultProps[key];
            
          }
    }
    return obj
  }

  module.exports ={defaults}
  

