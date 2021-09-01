from flask import Flask, request, json
from flask_cors import CORS
import tweepy as tw
from functools import reduce
from collections import defaultdict, OrderedDict
import itertools

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})

# Twitter API key and API secret
my_api_key = "XXXXXXXXXXXXXXXXXXXXXXXXXXX"
my_api_secret = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

# authenticate
auth = tw.OAuthHandler(my_api_key, my_api_secret)
api = tw.API(auth, wait_on_rate_limit=True)

@app.route('/searchTweets', methods=['GET'])
def get_tweets():
    search_term = request.args.get('query')
    tweets = tw.Cursor(api.search,
                q=search_term,
                lang="en").items(250)
    # create copy of tweets from response
    tweets_copy = []
    for tweet in tweets:
        tweets_copy.append(tweet._json)

    # removes any tweets without hashtag
    tweets_with_hashtags = list(filter(lambda tweet: len(tweet['entities']['hashtags']) > 0, tweets_copy))
    
    # method called by reducer below to group posts by their first hashtag
    def group_posts_by_hashtag(hashtag_group, post):
        first_hashtag_of_post = post['entities']['hashtags'][0]['text']
        hashtag_group[first_hashtag_of_post] = hashtag_group.get(first_hashtag_of_post, [])
        hashtag_group[first_hashtag_of_post].append(post)
        return hashtag_group

    tweets_categorised_by_hashtag = reduce(group_posts_by_hashtag, tweets_with_hashtags, defaultdict(list))

    # sort by most tweets per hashtag
    sorted_hashtags = dict(sorted(tweets_categorised_by_hashtag.items(), key=lambda x: len(x[1]), reverse=True))

    #limit by 10 top hashtags
    if len(sorted_hashtags) > 10:
        limit_ten_hashtags = dict(itertools.islice(sorted_hashtags.items(), 10))
        return json.dumps(limit_ten_hashtags, sort_keys=False)

    return json.dumps(sorted_hashtags, sort_keys=False)


if __name__ == '__main__':
    app.run()
