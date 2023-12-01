/* viết 1 hàm để tạo ra các action */
export const action=(type,payload)=>{
    return {
        type:type,
        payload:payload
    }
}