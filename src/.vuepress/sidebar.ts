import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "功能介绍",
      icon: "operate",
      prefix: "posts/Features",
      link: "posts/Features",
      children: "structure",
    },
    {
      text: "部署教程",
      icon: "blog",
      prefix: "posts/deploy/",
      link: "posts/deploy/",
      children: [
        {
          text: "手动部署(推荐，可以在所有平台上使用)",
          icon: "support",
          link: "manual",
        },
        {
          text: "安装器部署(Win)(不推荐，长时间未维护)",
          icon: "list",
          link: "auto_app_win",
        },
        {
          text: "Docker部署(仅推荐在Linux上使用)",
          icon: "list",
          link: "auto_docker",
        },
        {
          text: "安装器部署(Linux)(不推荐，已经长时间未维护)",
          icon: "list",
          link: "auto_app_linux",
        },
      ],
    },
    {
      text: "常见报错",
      icon: "info",
      link: "posts/errors/",
      prefix: "posts/errors/",
      children: "structure",
    },
    {
      text: "问题解答",
      icon: "blog",
      link: "posts/FAQ",
      prefix: "posts/FAQ",
      children: "structure",
    },
    {
      text: "插件介绍",
      icon: "plugin",
      prefix: "posts/plugins/",
      link: "posts/plugins/pluginsIntro",
      collapsible: true,
      children: [
        {
          text: "插件列表",
          icon: "list",
          link: "pluginsList",
        },
      ],
    },
    {
      text: "技术信息",
      icon: "code",
      link: "posts/develop/technologyInfo",
    },
    {
      text: "插件开发",
      icon: "editor",
      link: "posts/PluginsDevelop",
      prefix: "posts/PluginsDevelop",
      children: "structure",
    },
  ],
});
