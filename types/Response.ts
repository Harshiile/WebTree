export interface APIResponse {
    statusCode: number,
    message: string,
    error?: boolean,
    data?: Array<Object>
}