/* spellchecker: disable */

const translations = {
  actions: {
    new: '创建',
    edit: '编辑',
    show: '显示',
    delete: '删除',
    bulkDelete: '删除所有',
    list: '列表',
  },
  buttons: {
    save: '保存',
    addNewItem: '添加新的项目',
    filter: '筛选',
    applyChanges: '应用更改',
    resetFilter: '重置筛选器',
    confirmRemovalMany: '确认删除 {{count}} 个记录',
    confirmRemovalMany_plural: '确认删除 {{count}} 个记录',
    logout: '登出',
    login: '登陆',
    seeTheDocumentation: '参见: <1>文档</1>',
    createFirstRecord: '创建第一个记录',
  },
  labels: {
    navigation: '导航',
    pages: '页面',
    selectedRecords: '已选中 ({{selected}})',
    filters: '筛选器',
    adminVersion: 'Admin: {{version}}',
    appVersion: 'App: {{version}}',
    loginWelcome: '欢迎',
    dashboard: '仪表板',
  },
  properties: {
    length: '长度',
    from: '从',
    to: '到',
  },
  resources: {},
  messages: {
    successfullyBulkDeleted: '成功移除了 {{count}} 条记录',
    successfullyBulkDeleted_plural: '成功移除了 {{count}} 条记录',
    successfullyDeleted: '成功删除所选记录',
    successfullyUpdated: '成功更新所选记录',
    thereWereValidationErrors: '存在验证错误 - 见下方',
    forbiddenError: '你不能在 {{resourceId}} 上使用 {{actionName}}',
    anyForbiddenError: '你不能进行给定的操作',
    successfullyCreated: '成功创建了新纪录',
    bulkDeleteError: '删除记录时遇到错误, 检查控制台以获得更多信息',
    errorFetchingRecords: '获取记录时遇到错误, 检查控制台以获得更多信息',
    errorFetchingRecord: '获取记录时遇到错误, 检查控制台以获得更多信息',
    noRecordsSelected: '尚未选择任何记录',
    theseRecordsWillBeRemoved: '下面的记录将被删除',
    theseRecordsWillBeRemoved_plural: '下面的记录将被删除',
    pickSomeFirstToRemove: '若要删除记录, 需要先选出待删除的项目',
    error404Resource: '找不到具有 id: {{resourceId}} 的资源',
    error404Action: '具有 id: {{resourceId}} 的资源没有名为 {{actionName}} 的操作, 或你未被授权使用此操作!',
    error404Record: '具有 id: {{resourceId}} 的资源中没有具有 id: {{recordId}} 的记录, 或你未被授权使用此记录!',
    seeConsoleForMore: '检查开发控制台以获得更多信息...',
    noActionComponent: '你必须为你的操作实现操作组件',
    noRecordsInResource: '此资源中没有记录',
    noRecords: '没有记录',
    confirmDelete: '你真的想移除此项吗?',
    welcomeOnBoard_title: '欢迎使用!',
    welcomeOnBoard_subtitle: '现在你是我们的一员了! 我们为你准备了一些小贴士，供您使用。',
    loginWelcome: '到 AdminJS – 世界领先的开源自动生成管理面板, 可用于你的 Node.js 应用程序, 以将所有数据汇于一处管理',
    addingResources_title: '添加资源',
    addingResources_subtitle: '如何向侧边栏添加资源',
    customizeResources_title: '自定义资源',
    customizeResources_subtitle: '定义行为、添加属性等...',
    customizeActions_title: '自定义操作',
    customizeActions_subtitle: '编辑已有的操作或添加新的操作',
    writeOwnComponents_title: '编写组件',
    writeOwnComponents_subtitle: '如何修改 AdminJS 的外观',
    customDashboard_title: '自定义仪表板',
    customDashboard_subtitle: '如何修改此视图、并在侧边栏添加新页面',
    roleBasedAccess_title: '基于角色的访问控制',
    roleBasedAccess_subtitle: '在 AdminJS 中创建用户角色和权限',
    community_title: '加入 Slack 社群',
    community_subtitle: '与 AdminJS 的开发者以及其他 AdminJS 用户交流',
    foundBug_title: '发现 Bug? 需要改进?',
    foundBug_subtitle: '在 GitHub 仓库提交 issue',
    needMoreSolutions_title: '需要更多高级解决方案?',
    needMoreSolutions_subtitle: '我们已经准备好为您提供优美的 UX/UI 设计, 并量身定制基于 AdminJS 等的软件',
    invalidCredentials: '错误的电子邮箱或密码',
  },
}

export default {
  language: 'zh-CN',
  translations,
}
