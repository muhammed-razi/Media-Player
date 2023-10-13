import { serverURL } from "./serverURL";
import { commonAPI } from "./commonApi";

// upload a video
export const uploadVideo = async (reqBody) => {
    // make a post http request to http://localhost:4000/video to add video in json server and return response to add component
    return await commonAPI("POST", `${serverURL}/videos`, reqBody)
}

// get all videos from json server
export const getAllVideos = async () => {
    // make a get http request to http://localhost:4000/video to get all video from json server and return response to View component
    return await commonAPI("GET", `${serverURL}/videos`, "")
}

// get a video from json server
export const getAVideo = async (id) => {
    // make  get http request to http://localhost:4000/video to get a video from json server and return response to VideoCard component
    return await commonAPI("GET", `${serverURL}/videos/${id}`, "")
}
// remove a video from json server
export const deleteAVideo = async (id) => {
    // make delete http request to http://localhost:4000/video to remove a video from json server and return response to VideoCard component
    return await commonAPI("DELETE", `${serverURL}/videos/${id}`, {})
}

// store watching video history to json server
export const addToHistory = async (videoDetails) => {
    // make post http request to http://localhost:4000/video to add a video history in json server and return response to VideoCard component
    return await commonAPI("POST", `${serverURL}/history`, videoDetails)

}

// get all watching video history from json server
export const getAllHistory = async () => {
    // make get http request to http://localhost:4000/video to get a video history from json server and return response to watch history component
    return await commonAPI("GET", `${serverURL}/history`, "")
}

// delete watching video history from json server
export const deleteHistory = async (id) => {
    // make get http request to http://localhost:4000/video to get a video history from json server and return response to watch history component
    return await commonAPI("DELETE", `${serverURL}/history/${id}`,{})
}

// add a category to json server
export const addCategory = async (reqBody) => {
    // make post http request to http://localhost:4000/video to add a category in json server and return response to category component
    return await commonAPI("POST", `${serverURL}/categories`, reqBody)
}

// get all category from json server
export const getAllCategory = async () => {
    // make get http request to http://localhost:4000/video to get all category from json server and return response to category component
    return await commonAPI("GET", `${serverURL}/categories`, "")
}

// remove a category from json server
export const deleteCategory = async (id) => {
    // make delete http request to http://localhost:4000/video to delete particular category from json server and return response to category component
    return await commonAPI("DELETE", `${serverURL}/categories/${id}`, {})
}

// update a category from json server
export const updateCategory = async (id, body) => {
    // make put http request to http://localhost:4000/video to update particular category from json server and return response to category component
    return await commonAPI("PUT", `${serverURL}/categories/${id}`, body)
}