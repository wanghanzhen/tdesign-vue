<template>
  <div>
    <t-list :split="true">
      <t-list-item>
        <t-list-item-meta :image="imageUrl" title="列表标题" description="列表内容的描述性文字"></t-list-item-meta>
      </t-list-item>
      <t-list-item>
        <t-list-item-meta :image="imageUrl" title="列表标题" description="列表内容的描述性文字"></t-list-item-meta>
      </t-list-item>
      <t-list-item>
        <t-list-item-meta :image="imageUrl" title="列表标题" description="列表内容的描述性文字"></t-list-item-meta>
      </t-list-item>
    </t-list>

    <div style="margin-bottom: 16px"></div>

    <t-list :split="true">
      <t-list-item>
        <t-list-item-meta :image="imageUrl" title="列表标题">
          <template slot="description">
            <p>列表内容的描述性文字</p>
          </template>
        </t-list-item-meta>
      </t-list-item>
    </t-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://tdesign.gtimg.com/site/avatar.jpg',
    };
  },
};
</script>
