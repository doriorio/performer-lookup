
async function getResults(query, callback) {

    const response = await fetch(`/api/${query}`);
    const body = await response.json();

    let data = processResults(body, callback);
    return data;
}


export const processResults = (results, callback) => {
    results = results['json'];
    var loopResults = results['results'];

    // let performerData = {};
    // let performerData = [];
    
    // loopResults.forEach(function(performer) {
    //     if (count >= NUM_RESULTS) return;
    //     let current = {}
        
    //     // performerData[count] = {}
    //     // performerData[performer.name]= {}
    //     current['name'] = performer.name;
    //     // performerData[performer.name]['image_path'] = performer.profile_path ?  base + performer.profile_path : '';
    //     current['image_path'] = performer.profile_path ?  base + performer.profile_path : '';
    //     let tempMovie = performer.known_for;
    //     // performerData[performer.name]['movies'] = [];
    //     current['movies'] = [];
    //     for (const movie in tempMovie) {
    //         let thisMovie = tempMovie[movie];
    //         var title = '';
    //         if (thisMovie.hasOwnProperty('title')) {
    //             title = thisMovie['title'];
    //         } else if(thisMovie.hasOwnProperty['name']) {
    //             title = thisMovie['name'];
    //         }
    //         // performerData[performer.name]['movies'].push(title);
    //         current['movies'].push(title);
    //         performerData.push(current);
    //     }
    //     count+=1;
    // })

    // return performerData;
    return loopResults;

};


export default getResults;