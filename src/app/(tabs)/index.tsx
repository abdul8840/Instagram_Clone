import { FlatList } from "react-native";
import posts from '~/assets/data/posts.json';
import PostListItem from "~/src/components/PostListItem";

const post1 = posts[0];

export default function FeedScreen() {

    return (
        <FlatList 
            data={posts}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <PostListItem post={item}/>}
        />
    )
}