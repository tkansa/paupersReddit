// create an interface for the entire result, with an array inside it for the children
export interface Posts {
    data: {
        children: Post[];          
    }
}

// create an interface for a single result that matches the JSON format
export interface Post {
    data: {
        title: string;
        thumbnail: string;
        permalink: string;

    }
}

