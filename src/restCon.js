export function restCon(payload,method,route,param="")
{
    payload=JSON.stringify(payload);
    return fetch(process.env.REACT_APP_SITE+"/"+route+"/"+param, {
         method: method,
         body: payload,
         headers:{"Content-Type":"application/json"}
        });
}