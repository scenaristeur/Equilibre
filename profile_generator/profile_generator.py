from autogen import AssistantAgent, UserProxyAgent, config_list_from_json

# Load LLM inference endpoints from an env variable or a file
# See https://microsoft.github.io/autogen/docs/FAQ#set-your-api-endpoints
# and OAI_CONFIG_LIST_sample


message = """La théorie sous-jacente à l'idée de Philip K. Dick concernant les quatre types de femmes pour l'équilibre d'un homme suggère que les individus ont des besoins complexes et divers en matière de relations humaines. Chaque type de femme représente un aspect différent de la vie et de l'identité d'un individu, et chacun de ces aspects contribue à son équilibre émotionnel et psychologique. Voici une exploration plus détaillée :
    Femme Attirante pour le Sexe : Cette femme représente la dimension physique et sexuelle de la vie. Elle peut satisfaire les besoins de désir et de passion, offrant une connexion charnelle qui est importante pour de nombreuses personnes.
    Femme Maternelle pour le Réconfort : Cette femme offre un soutien émotionnel et un sentiment de sécurité. Elle peut jouer le rôle de la mère, fournissant un refuge contre les pressions extérieures et les moments difficiles.
    Femme Créative pour Stimuler l'Esprit : Cette femme incarne l'aspect intellectuel et créatif de la vie. Elle peut inspirer, encourager la croissance personnelle et nourrir l'esprit par le partage d'idées et d'expériences intellectuelles.
    Femme Partageant des Croyances Philosophiques : Cette femme partage les valeurs, les croyances et la vision du monde de l'individu. Elle offre une connexion profonde sur le plan philosophique et spirituel.
    Génere 20 profils de femmes au format JSON dans le fichier profiles.json
    """



config_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST")
assistant = AssistantAgent("assistant", llm_config={"config_list": config_list})
user_proxy = UserProxyAgent("user_proxy", code_execution_config={"work_dir": "profiles"})
user_proxy.initiate_chat(assistant, message=message)
