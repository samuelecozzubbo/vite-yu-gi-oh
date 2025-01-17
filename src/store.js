import { reactive } from 'vue'

export const store = reactive({
    charactersList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&",
    loading: true,
    archetypeSelect: "",
    archetypesUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypes: [],
});
