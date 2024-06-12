const formatTel = (e) => {
    if(e){
        const input = e.target.value;
        const cleaned = input.replace(/\D/g, "").substring(0, 11);
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
        
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        } else {
            const partialMatch = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);
            if (partialMatch) {
                return `(${partialMatch[1]}) ${partialMatch[2]}-${partialMatch[3]}`;
            } else {
                return cleaned;
            }
        }
    }
};

export default formatTel;