
export const required = (value: string): string | undefined => {
    if(value){
        return undefined
    } else {
        return 'Error Message'
    }
}

export const maxLengthCreator = (max: number) => (value: string): string | undefined => {
    if(value && value.length  > max){
        return `Maximum length exceeded (${max} characters)`;
    } else {
        return undefined
    }
}
