const getUTMs = () => {
    // Obtém a URL atual
    var urlAtual = window.location.href;

    // Cria um objeto URL
    var urlObjeto = new URL(urlAtual);

    // Obtém os parâmetros da consulta (query parameters)
    var utm_source = urlObjeto.searchParams.get('utm_source') || "null";
    var utm_medium = urlObjeto.searchParams.get('utm_medium') || "null";
    var utm_campaign = urlObjeto.searchParams.get('utm_campaign') || "null";
    var utm_term = urlObjeto.searchParams.get('utm_term') || "null";
    var utm_content = urlObjeto.searchParams.get('utm_content') || "null";

    // Retorna um objeto com os valores das UTM parameters
    return {
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content
    };
}

export default getUTMs;