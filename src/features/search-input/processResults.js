
import base from './imagepath';


const NUM_RESULTS = 5;


async function getResults(query, callback) {

    // call(ENDPOINT + query, callback)
    const response = await fetch(`/api/${query}`);
    const body = await response.json();

    processResults(body);
}


export const processResults = (results) => {
    console.log(results);
    results = JSON.parse(results.responseText);

    var loopResults = results['results'];

    let count = 0;
    let performerData = {};
    
    loopResults.forEach(function(performer) {
        if (count >= NUM_RESULTS) return;
        count+=1;
        performerData[performer.name]= {}
        performerData[performer.name]['image_path'] = performer.profile_path ?  base + performer.profile_path : '';
        let tempMovie = performer.known_for;
        performerData[performer.name]['movies'] = [];
        for (const movie in tempMovie) {
            let thisMovie = tempMovie[movie];
            var title = '';
            if (thisMovie.hasOwnProperty('title')) {
                title = thisMovie['title'];
            } else if(thisMovie.hasOwnProperty['name']) {
                title = thisMovie['name'];
            }
            performerData[performer.name]['movies'].push(title);
        }
    })
    return performerData;

};

export function call(url, callback, options) {
	
    //	Attempt to define the request object based on browser specifics
    var xhr		= null;
    
    //	Test for support for XMLHttpRequest first
    if(typeof XMLHttpRequest !== 'undefined' && XMLHttpRequest) {
    
        xhr	= new XMLHttpRequest();

        
    } else {
    
        return xhr;			
    }
    
    //	Define the necessary variables
    var timer	= null;

    //	Define the handler that will inform us and call the provided callback function
    xhr.onreadystatechange	= function() {
        
        if(this.readyState < 4) {
            return;
        }
        if(this.readyState === 4) {
            //Debug.print("readyState === 4", 4);
            if(timer !== null) {
                clearTimeout(timer);
            }
            
            for(var e in this) {
            
            }
            
            //	Return XHR object to the callback function
            callback(this);
        }
    };
    
    
    //	Define the method of sending
    if(options !== undefined && 
        ((options.method !== undefined && (options.method == "POST" || options.method == "post")) || options.params !== undefined)) {
        
        //	Set the properties
        xhr.open('POST', url, true);
        
        //	Set the parameters, if any, and send
        if(options.params !== undefined) {				
            
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            
            //	if options.params didn't come in as a string, modify it for the format: "param1=value1&param2=value2"
            if(typeof options.params != 'string') {
                
                options.params = JSON.stringify(options.params);
                
                options.params = options.params.slice(1);
                options.params = options.params.substring(0, options.params.length - 1);
                options.params = options.params.replace(/\:/gi, '=');
                options.params = options.params.replace(/\"/gi, '');
                options.params = options.params.replace(/\,/gi, '&');
            }
            
            xhr.send(options.params);
            
        } else {
            xhr.send('');
        }
    } else {
    //	Assume GET						
        //	Append a date string to the end of the url so that response doesn't get cached
        if(url.indexOf('?') > -1) {
            
            url += '&t=' + (new Date().getTime()).toString();
            
        } else {
            
            url += '?t=' + (new Date().getTime()).toString();
        }
        
        //	Set the properties and send			
        xhr.open('GET', url, true);
        
        xhr.send();			
    }
    
    
    //	Set a timeout if requested in options
    if(options !== undefined && options.timeout !== undefined) {
        
        timer	= setTimeout(function() { xhr.ourOwnTimeout = '1'; xhr.abort(); }, options.timeout);
    }
    
    return xhr;
}


export default getResults;