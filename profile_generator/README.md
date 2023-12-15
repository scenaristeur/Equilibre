/dev/Equilibre/profile_generator$ python profile_generator.py 
/home/smag/.local/lib/python3.10/site-packages/matplotlib/projections/__init__.py:63: UserWarning: Unable to import Axes3D. This may be due to multiple versions of Matplotlib being installed (e.g. as a system package and as a pip package). As a result, the 3D projection is not available.
  warnings.warn("Unable to import Axes3D. This may be due to multiple versions of "
user_proxy (to assistant):

Genere 4 profiles de femmes au format JSON

--------------------------------------------------------------------------------
assistant (to user_proxy):

```python
# filename: generate_profiles.py
import json
import random

def generate_profile(name, age, city, hobby):
    return {
        "name": name,
        "age": age,
        "city": city,
        "hobby": hobby
    }

names = ["Alice", "Sophie", "Eva", "Clara"]
ages = [25, 31, 42, 19]
cities = ["Paris", "Berlin", "London", "Rome"]
hobbies = ["reading", "painting", "traveling", "cooking"]

profiles = []
for i in range(4):
    profile = generate_profile(names[i], ages[i], cities[i], hobbies[i])
    profiles.append(profile)

print(json.dumps(profiles, indent=2))
```
Run the script `generate_profiles.py`. The output will be a JSON array of 4 female profiles.

Example output:
```json
[
  {
    "name": "Alice",
    "age": 25,
    "city": "Paris",
    "hobby": "reading"
  },
  {
    "name": "Sophie",
    "age": 31,
    "city": "Berlin",
    "hobby": "painting"
  },
  {
    "name": "Eva",
    "age": 42,
    "city": "London",
    "hobby": "traveling"
  },
  {
    "name": "Clara",
    "age": 19,
    "city": "Rome",
    "hobby": "cooking"
  }
]
```
TERMINATE

--------------------------------------------------------------------------------
Provide feedback to assistant. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: 
