import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/CrudContext';
import PostForm from '../components/PostForm';

const EditScreen = ({ navigation }) => {
  const postId = navigation.getParam('id');
  const { state, editPost } = useContext(Context);
  const post = state.find((p) => p.id === postId);

  return (
    <PostForm
      initialValues={{ title: post.title, content: post.content }}
      onSubmit={(title, content) => {
        editPost(postId, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
