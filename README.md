# PI-ID
Node module to return Raspberry Pi CPU ID


Usage:

async function get() {
    try{
        let result = await getCpuId();
        console.log(result);
    } 
        catch (error) {
            console.error(error);
          }
};
get();
